import homeRed from "./homeRed"
import popularRed from './popularRed'
import topRed from './topRed'
import trailerRed from './trailerRed'
import trendingRed from './trendingRed'
import {combineReducers} from "redux"
export default combineReducers({home:homeRed, popular:popularRed, topRated:topRed, trailer:trailerRed, trending:trendingRed})