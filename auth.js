export async function onRequestGet(context) {
  const { env } = context;
  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authUrl.searchParams.set("scope", "repo,user");
  return Response.redirect(authUrl.toString(), 302);
}
