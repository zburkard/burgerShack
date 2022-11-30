import { response } from "express";
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {


  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAllBurgers)
      .get('/:id', this.getOneBurger)
      .post('', this.create)

  }

  async getAllBurgers(req, res, next) {
    const burgers = await burgersService.getAllBurgers()
    try {
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async getOneBurger(req, res, next) {
    try {
      const burger = await burgersService.getOneBurger(req.params.id)
      return res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const newBurger = await burgersService.create(req.body)
      return res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }
}