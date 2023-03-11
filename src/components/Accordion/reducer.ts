export type ActionType = {
    type: string
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED';
export const reducer = (state: boolean, action: ActionType): boolean => {

    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return !state;
        default :
            throw new Error('Sorry, bad action type');
    }
}