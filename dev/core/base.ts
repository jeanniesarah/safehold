import { IError } from "../..";
import ChannelCodes from "./channel_codes";

/**
 * Super class for all core classes
 *
 * @export
 * @class Base
 */
export class Base {
	/**
	 * Send an app error to the renderer
	 *
	 * @param {Electron.BrowserWindow} win The browser window
	 * @param {IError} err The error object
	 * @memberof Base
	 */
	public sendError(win: Electron.BrowserWindow, err: IError) {
		this.send(win, ChannelCodes.AppError, err);
	}

	/**
	 * Send a message to the renderer window
	 *
	 * @param {Electron.BrowserWindow} win The browser window
	 * @param {string} channel The target channel
	 * @param {*} data The data to send
	 * @memberof Base
	 */
	public send(win: Electron.BrowserWindow, channel: string, data: any) {
		win.webContents.send(channel, data);
	}
}
