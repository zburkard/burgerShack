import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  // Account = mongoose.model('Account', AccountSchema);

  Burgers = [
    {
      name: 'Double-Double',
      description: 'Two 100% black angus patties and two slices of american cheese on a sesame seed bun.',
      price: 15,
      id: 1
    }
  ]


}

export const dbContext = new DbContext()
