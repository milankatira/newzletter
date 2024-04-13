export default function handler(req: { query: { emailId: any; }; }, res: { writeHead: (arg0: number, arg1: { 'Content-Type': string; 'Content-Length': number; }) => void; end: (arg0: Buffer) => void; }) {
    const { emailId } = req.query;

    // Log the open event in your database using the emailId
    // Database logic here

    // Respond with a 1x1 pixel transparent GIF
    const pixel = Buffer.from('R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'base64');
    res.writeHead(200, {
        'Content-Type': 'image/gif',
        'Content-Length': pixel.length,
    });
    res.end(pixel);
}