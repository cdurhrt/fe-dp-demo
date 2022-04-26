import { UnitStatus } from "./unit-status"

export class Unit {
  precision: number // valueRange间隔精度
  size: number // valueRange一半的空间precision总量
  private valueRange: number[] // 
  value: number
  status: UnitStatus

  constructor(size: number = 1, precision: number = 8) {
    this.precision = parseInt(precision.toString())
    this.size = Math.ceil(size)
    console.log('this.precision', this.precision)
    console.log('this.size', this.size)
  }
}