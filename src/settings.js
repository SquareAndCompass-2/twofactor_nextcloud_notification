/*
 * @copyright 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
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

import Vue from 'vue'

import Nextcloud from './mixins/Nextcloud'
import PersonalSettings from './components/PersonalSettings.vue'
import store from './store'
import { loadState } from '@nextcloud/initial-state'

Vue.mixin(Nextcloud)

const enabled = loadState('twofactor_nextcloud_notification', 'state')
store.replaceState({
	enabled,
})

const View = Vue.extend(PersonalSettings)
new View({
	store,
}).$mount('#twofactor-notification-settings')
