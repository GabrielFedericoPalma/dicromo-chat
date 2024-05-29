import { defineStore } from 'pinia'

import type { IFriend } from '../models/profiles'

export const useSearchFriendStore = defineStore('searchFriend', {
  state: () => {
    return {
      // for initially empty lists
      friend: [{
        id: 'S214',
        created: '10/04/2015',
        lastLogin: 'today',
        isActive: true,
        firstName: 'Sophie',
        lastName: 'McAllister',
        age: '22',
        location: 'Chicago',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum mollitia commodi consequatur esse nostrum maiores ducimus in, molestias veritatis officia labore, vel, aliquam velit assumenda. Enim, exercitationem eum? Atque, quis? ',
        photo: '/img/friend.jpg',
        status: 'ONLINE'
      }] as IFriend[],
    }
  },
  getters: {},
  actions: {}
})
