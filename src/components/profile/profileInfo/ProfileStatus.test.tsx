/* eslint-disable testing-library/await-async-query */
import { create } from "react-test-renderer"
import { ProfileStatus } from "./ProfileStatus"
import { updateUserStatus } from "../../../redux/profile-reducer";

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateUserStatus={updateUserStatus} />);
        const instance: any = component.getInstance()

        expect(instance.state.status).toBe('it-kamasutra.com')
    })

    test('after creation <span> should be displayed with correct status', () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateUserStatus={updateUserStatus} />);
        const root = component.root
        const span: any = root.findByType('span')

        expect(span).not.toBeNull()
    })

    test('after creation <input> shouldn`t be displayed', () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateUserStatus={updateUserStatus} />);
        const root = component.root

        expect(() => {
            const input: any = root.findByType('input')
        }).toThrow()
    })

    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateUserStatus={updateUserStatus} />);
        const root = component.root
        const span: any = root.findByType('span')

        expect(span.children[0]).toBe("it-kamasutra.com")
    })

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateUserStatus={updateUserStatus} />);
        const root = component.root

        const span: any = root.findByType('span')
        span.props.onDoubleClick()

        const input: any = root.findByType('input')
        expect(input.props.value).toBe("it-kamasutra.com")
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="it-kamasutra.com" updateUserStatus={mockCallback} />);

        const instance: any = component.getInstance()
        instance.deActivateEditMode()

        expect(mockCallback.mock.calls.length).toBe(1)
    })
})