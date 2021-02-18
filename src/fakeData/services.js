import icoDeliver from '../Image/ICON/deliver.png';
import deliverMan from '../Image/img/man.png';
import notification from '../Image/ICON/notification.png';
import chef from '../Image/img/chef.png';
import home from '../Image/ICON/home.png';
import homeDeliver from '../Image/img/deliver-home.png';

const services = [
	{
		id          : 1234,
		title       : 'Skilled Bakers',
		description :
			'For a memorable meal the quality of the service is something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.',
		icon        : icoDeliver,
		img         : deliverMan
	},
	{
		id          : 3426,
		title       : 'Fast Service',
		description :
			'Fast casual dining consists of a more inviting sit-down ambiance, and often, the ability to build your own meal. The menu consists of better quality ingredients that can be found at most fast food establishments.',
		icon        : notification,
		img         : chef
	},
	{
		id          : 2134,
		title       : 'Home Delivery',
		description :
			'We provide fastest home delivery with safe food,with mininum shipping charges and best food quality .',
		icon        : home,
		img         : homeDeliver
	}
];

export default services;
