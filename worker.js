export const api = {
  icon: '🚀',
  name: 'tsv.do',
  description: 'TSV Generation & Transformation API',
  url: 'https://tsv.do/api',
  type: 'https://apis.do/formats',
  endpoints: {
    listCategories: 'https://tsv.do/api',
    getCategory: 'https://tsv.do/:type',
  },
  site: 'https://tsv.do',
  login: 'https://tsv.do/login',
  signup: 'https://tsv.do/signup',
  subscribe: 'https://tsv.do/subscribe',
  repo: 'https://github.com/drivly/tsv.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://tsv.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
