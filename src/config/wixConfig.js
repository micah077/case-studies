import { createClient, OAuthStrategy } from "@wix/sdk";
import { submissions } from "@wix/forms";
import { posts } from "@wix/blog";
const wixClient = createClient({
  modules: { submissions, posts },
  auth: OAuthStrategy({ clientId: process.env.WIX_CLIENT_ID }),
});

export default wixClient;
