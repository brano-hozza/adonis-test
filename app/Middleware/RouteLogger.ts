import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RouteLogger {
  public async handle({ request }: HttpContextContract, next: () => Promise<void>) {
    console.log('#######################')
    console.log('\x1b[33m%s\x1b[0m', `METHOD: ${request.method()}`)
    console.log('\x1b[36m%s\x1b[0m', `Url: ${request.url()}`)
    console.log('\x1b[31m%s\x1b[0m', `Params: ${JSON.stringify(request.all())}`)
    console.log('#######################')
    await next()
  }
}
