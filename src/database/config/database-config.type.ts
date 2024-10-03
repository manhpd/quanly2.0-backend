export type DatabaseConfig = {
  isDocumentDatabase: boolean;
  url?: string;
  type?: string;
  host?: string;
  driver?: string;
  port?: number;
  password?: string;
  name?: string;
  username?: string;
  synchronize?: boolean;
  maxConnections: number;
  sslEnabled?: boolean;
  rejectUnauthorized?: boolean;
  ca?: string;
  key?: string;
  cert?: string;
};
