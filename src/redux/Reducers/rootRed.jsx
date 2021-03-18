import homeRed from "./homeRed"
import popularRed from './popularRed'
import freeRed from './freeRed'
import trailerRed from './trailerRed'
import trendingRed from './trendingRed'
import {combineReducers} from "redux"
export default combineReducers({home:homeRed, popular:popularRed, free:freeRed, trailer:trailerRed, trending:trendingRed})