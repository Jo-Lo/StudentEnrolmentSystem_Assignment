import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public StudentID: number

  @column()
  public GivenName: string

  @column()
  public LastName: string

  @column()
  public EmailAddress: string

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
