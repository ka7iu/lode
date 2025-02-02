import { IProcess, DefaultProcess } from '@lib/process/process'

export class YarnProcess extends DefaultProcess implements IProcess {
    static readonly type: string = 'yarn'

    /**
     * Whether this process owns a given command.
     *
     * @param command The command we're checking to match a Yarn runner.
     */
    public static owns (command: string): boolean {
        return command.toLowerCase().search(/\byarn\b/) > -1
    }
}
