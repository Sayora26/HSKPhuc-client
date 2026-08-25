import { getSiteSettings, updateSiteSettings } from '@/services/setting.service';
import { SiteSettings } from '@/types';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const isValidSettingsPayload = (payload: Partial<SiteSettings>) =>
  Array.isArray(payload.tickerTexts) &&
  payload.tickerTexts.every((text) => typeof text === 'string' && text.trim().length > 0);

export const GET = async (): Promise<NextResponse> => {
  try {
    const settings = await getSiteSettings();
    return NextResponse.json(settings);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
};

export const PATCH = async (request: Request): Promise<NextResponse> => {
  try {
    const payload = (await request.json()) as SiteSettings;

    if (!isValidSettingsPayload(payload)) {
      return NextResponse.json({ error: 'Invalid settings data' }, { status: 400 });
    }

    const updatedSettings = await updateSiteSettings(payload);

    return NextResponse.json(updatedSettings);
  } catch {
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
};
