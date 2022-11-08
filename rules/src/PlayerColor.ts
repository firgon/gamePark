import {isEnumValue} from '@gamepark/rules-api'

enum PlayerColor {
  Blue = 1, Grey, Green, Yellow, Red
}

export default PlayerColor

export const playerColors = Object.values(PlayerColor).filter(isEnumValue)
