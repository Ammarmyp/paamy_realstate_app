import { Client, Account, Avatars, OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";

export const config = {
  platform: "com.paammy.paamyrealstate",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

const client = new Client();
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
  try {
    const redirectURL = Linking.createURL("/");
    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectURL
    );
    if (!response) throw new Error("Failed to login");

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectURL
    );

    if (browserResult.type !== "success") throw new Error("Failed to login");

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();

    if (!secret || !userId) throw new Error("Failed to login");

    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to login");

    return true;
  } catch (error) {
    console.error(error);
  }
}

export async function logOut() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
