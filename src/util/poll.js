/*
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const pollRec = (producer, res, interval) => {
	producer()
		.then(res)
		.catch(err => {
			console.error('promise rejected:', err)

			setTimeout(() => {
				console.error('retrying …')
				pollRec(producer, res, interval)
			}, interval)
		})
}

/**
 * @param {Function} producer factory function that produces promises
 * @param {number} interval polling interval
 * @return {Promise}
 */
export const poll = (producer, interval) => {
	return new Promise(resolve => {
		pollRec(producer, resolve, interval)
	})
}
