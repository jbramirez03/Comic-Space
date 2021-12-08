import mutations from './mutations.js';
import subscriptions from './subscriptions.js';
import queries from './queries.js';
export default { ...mutations, ...queries, ...subscriptions };