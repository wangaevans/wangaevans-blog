// googleAuth.ts
import { OAuth2Client } from 'google-auth-library';

const CLIENT_ID = "764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com";
const CLIENT_SECRET = "d-FL95Q19q7MQmFpd7hHD0Ty";
const REDIRECT_URI = 'https://www.googleapis.com/robot/v1/metadata/x509/starting-account-u4ebd8y3r4b8%40wanga-evans-page-1698840935550.iam.gserviceaccount.com'

const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

interface Tokens {
  access_token: string;
}

async function getAccessToken(code: string): Promise<string> {
  const { tokens } = await client.getToken(code);
  return tokens.access_token;
}

export { getAccessToken };
export type{ Tokens };
