import type Hapi from '@hapi/hapi';

export type EmailPluginOptions = Record<string, never>;

export const AuthPlugin: Hapi.Plugin<EmailPluginOptions> = {
  multiple: false,
  name: 'Sklep Email Plugin',
  version: '1.0.0',
  register(server, _options) {
    server.events.on('auth:user:registered', (_user) => {
      // @todo send confirmation email
    });
  },
};
