import { createUser, getUserData, deleteUser } from '../utils/apiCommands.js';

describe('First test with API commands', () => {
    let userId: number;
    let userEmail: string;
    let userName: string;

    afterAll(async () => {
        await deleteUser(userId);
    });

    it('POST USER',async () => {
        const user = {
            name: 'Automation QA',
            email: 'test@testing.com'
        };
        await createUser(user);
        userId = 1;
    });

    it('GET USER DATA',async () => {
        const userData = await getUserData(userId)
        userName = userData.name;
        userEmail = userData.email;

        console.log('User name', await userName);
        console.log('User email', await userEmail);
    });
});


