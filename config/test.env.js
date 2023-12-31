import { merge } from "webpack-merge";
import devEnv from './dev.env.js'

export default merge(devEnv, {
  NODE_ENV: '"testing"'
})
