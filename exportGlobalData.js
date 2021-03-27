var fs = require('fs');
var contentful = require('contentful');

require('dotenv').config();

var client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
});

async function getAnnouncement() {
    try {
        const entries = await client.getEntries({
            content_type: 'blogPost',
            order: '-fields.publishDate',
            limit: 1,
            select: [
                'sys.createdAt',
                'sys.updatedAt',
                'fields.title',
                'fields.slug',
                'fields.description',
                'fields.publishDate',
            ].join(','),
            'fields.announcement': true,
        });

        return entries.items ? entries.items[0] : null;
    } catch (e) {
        throw e;
    }
}

async function exportGlobalDataFromCMS() {
    const announcement = await getAnnouncement();

    fs.writeFile('./public/config.json', JSON.stringify({ announcement }, null, 2), (err) => {
        if (err) throw err;
        console.info('Global data manifest written to file');
    });
}

async function main() {
    try {
        await exportGlobalDataFromCMS();
    } catch (err) {
        throw new Error(err);
    }
}

main();
