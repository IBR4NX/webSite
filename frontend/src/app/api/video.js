import api from "./http";
import {API} from "./api";
const deviceInfo = {
  userAgent: navigator.userAgent,
  language: navigator.language,
  platform: navigator.platform,
  online: navigator.onLine,
};

export async function fetchVideoInfo(url) {
  const res = await api.post(API.info, {url , deviceInfo});
  return res.data;
}

export async function downloadVideo(formatId, videoUrl, customFilename = null) {
  const payload = { format_id: formatId, url: videoUrl };

  if (customFilename) payload.custom_filename = customFilename;

  const res = await api.post(API.download, payload);
  return res.data;
}

export async function mergeVideo(video_url, audio_url, output = null) {
  const payload = { video_url, audio_url };
  if (output) payload.output = output;

  const res = await api.post(API.merge, payload);
  return res.data;
}

export async function getDownloadHistory() {
  const res = await api.get("/history");
  return res.data;
}

// Optional duplicate? ممكن تحذفه لو ما تحتاجه لأنه نفس fetchVideoInfo
export async function test(route ,url) {
  const res = await api.post(route, { url });
  return res.data;
}