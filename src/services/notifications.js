import Noty from 'noty'

export default class NotificationsService {
  success(message) {
    (new Noty({
      text: message,
      timeout: 1500,
      type: 'success',
    })).show()
  }

  error(message) {
    (new Noty({
      text: message,
      timeout: 1500,
      type: 'error',
    })).show()
  }
}
