// assuming top-level await for brevity
import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: 'osiris.music66@gmail.com',
	password: '123',
	host: 'webmail.emailmyname.com',
	ssl: true,
});

try {
	const message = await client.sendAsync({
		text: 'i hope this works',
		from: 'you <username@your-email.com>',
		to: 'someone <sabri.sadki@yahoo.com>',
		cc: 'else <else@your-email.com>',
		subject: 'testing emailjs',
	});
	console.log(message);
} catch (err) {
	console.error(err);
}