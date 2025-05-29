import { NextRequest, NextResponse } from 'next/server';
import { WebClient } from '@slack/web-api';

const token = process.env.SLACK_BOT_TOKEN!;
const channel = '#portfolio'; // チャンネル名 or チャンネルID
const slack = new WebClient(token);

export async function POST(req: NextRequest) {
    const { name, email, comment } = await req.json();
    const now = new Date();
    const jstTime = now.toLocaleString('ja-JP', {
        timeZone: 'Asia/Tokyo',
    });

    const text = `*【ポートフォリオから新しいメッセージが届きました】*
*日時：* ${jstTime}
*氏名：* ${name}
*E-mail：* ${email}
*===================================*
*内容：*
${comment}`;

    try {
        await slack.chat.postMessage({
            channel,
            text,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Slack送信エラー:', error);
        return NextResponse.json({ ok: false, error }, { status: 500 });
    }
}