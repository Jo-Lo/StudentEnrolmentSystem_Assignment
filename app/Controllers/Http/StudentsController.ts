import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Student from 'App/Models/Student'
//import {schema, rules} from '@ioc:Adonis/Core/Validator'
import StudentValidator from 'App/Validators/StudentValidator'

export default class StudentsController {
  
  public async index({}: HttpContextContract) {
    const students = await Student.all()
    return students
  }

  public async create({}: HttpContextContract) {}


  public async store({request, response}: HttpContextContract) {
    try{
      const payload = await request.validate(StudentValidator)

      const newstudent: Student = await Student.create(payload)
      return response.ok(newstudent)
    } catch (error){
      response.badRequest(error.messages)
    }
  }


  public async show({params, response}: HttpContextContract) {
    const studentsinfo = await Student.find(params.id)
    return response.ok(studentsinfo)
  }


  public async edit({}: HttpContextContract) {}


  public async update({params, request, response}: HttpContextContract) {
    const id = params.id
    const student = await Student.find(id)

    if(!student){
      return response.notFound({message: 'Student not found!'})
    }

    if(request.method() === 'PATCH'){
      student.StudentID = request.input('StudentID')
      student.GivenName = request.input('GivenName')
      student.LastName = request.input('LastName')
      student.EmailAddress = request.input('EmailAddress')

      await student.save()
      return response.ok(student)
    }

    if(request.method() === 'PUT'){
      const payload = await request.validate(StudentValidator)
      student.merge(payload)
      await student.save()
      return response.ok(student)
    }
  }


  public async destroy({params, response}: HttpContextContract) {
    const id = params.id
    const student = await Student.find(id)

    if(!student){
      return response.notFound({message: 'Student not found!'})
    }
    await student.delete()
    return response.ok({
      message: `Student record ${id + `: StudentID: ` + student.StudentID + `, Student FirstName: ` + student.GivenName} was deleted successfully.`
    })
  }
}
