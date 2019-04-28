import { RequestGlobalDataLoad, SuccessGlobalDataLoad, FailureGlobalDataLoad, ActionTypes } from './globalData.actions'
import { GlobalData } from './../../model/globalData'

import { globalDataMockUp } from './../../testing/globalData.mockup'

describe('GlobalData Actions', () => {
  it('should generate REQUEST_GLOBAL_DATA_LOAD', () => {
    const result = new RequestGlobalDataLoad()

    expect({ ...result }).toEqual({ type: ActionTypes.REQUEST_GLOBAL_DATA_LOAD })
  })

  it('should generate SUCCESS_GLOBAL_DATA_LOAD', () => {
    const payload = globalDataMockUp
    const result = new SuccessGlobalDataLoad(payload)

    expect({ ...result }).toEqual({ type: ActionTypes.SUCCESS_GLOBAL_DATA_LOAD, payload })
  })

  it('should generate FAILURE_GLOBAL_DATA_LOAD', () => {
    const result = new FailureGlobalDataLoad()

    expect({ ...result }).toEqual({ type: ActionTypes.FAILURE_GLOBAL_DATA_LOAD })
  })
})
