import DataLoader from 'dataloader';
import { User } from '../entities/User';

// userIds is an array of user ids such as
// [1, 78, 8, 9]
// returns array of same size of corresponding users
// [{id: 1, username: 'tim'}, {}, {}, {}]
export const createUserLoader = () =>
  new DataLoader<number, User>(async (userIds) => {
    const users = await User.findByIds(userIds as number[]);

    const userIdToUser: Record<number, User> = {};
    users.forEach((u) => {
      userIdToUser[u.id] = u;
    });

    return userIds.map((userId) => userIdToUser[userId]);
  });
