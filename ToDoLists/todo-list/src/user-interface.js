import userInterfaceMenu from './ui-menu';
import userInterfaceContainer from './ui-container';
import userInterfaceTodo from './ui-todo';

const userInterface = (() => {
    return Object.assign(
        {},
        userInterfaceMenu,
        userInterfaceContainer,
        userInterfaceTodo
    );
})();

export default userInterface;