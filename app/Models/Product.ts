import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public product_id: number

  @column()
  public user_id: number

  @column()
  public product_name: string

  @column()
  public product_price: number

  @column()
  public product_description: string

  @column()
  public product_category: string

  @column()
  public product_observation: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
