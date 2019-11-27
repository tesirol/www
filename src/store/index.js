import LogRocket from "logrocket";
import createPlugin from "logrocket-vuex";

function createPlugins(env) {
  const plugins = [];

  const prodOnly = [createPlugin(LogRocket)];

  if (env == "production") plugins.push(...prodOnly);

  return plugins;
}

export const plugins = createPlugins(process.env.NODE_ENV);
