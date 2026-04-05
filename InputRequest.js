"use strict";
import action from './actions.js';
export async function operator(request) {
  try {
    const {default: action} = await import('./actions.js')
  return request.message;
} catch(error) {
  throw new Error(JSON.stringify({ error: error.message }));
 }
}
