import { apiGet, apiPost } from "../database";

// TODO: Implement POST function
export async function POST(req: Request, res: Response) {}

export async function GET(req: Request, res: Response) {
    const query = `
        SELECT rowid, * FROM feed
        ORDER BY CreatedAt DESC
    `;

    let status, body;
    try {
        await apiGet(query)
        .then((res) => {
            status = 200;
            body = res;
        })
        .catch((err) => {
            status = 400;
            body = err;
        });
        return Response.json(body, { status });
    } catch (err) {
        return Response.json(err, { status: 400 });
    }
}