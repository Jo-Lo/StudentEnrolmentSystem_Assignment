import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({columnName: 'StudentID'})
  public StudentID: string

  @column({columnName: 'GivenName'})
  public GivenName: string

  @column({columnName: 'LastName'})
  public LastName: string

  @column({columnName: 'EmailAddress'})
  public EmailAddress: string

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
