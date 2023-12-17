import 'next-cloudinary'
type ImageInfotype = {
  public_id: string;
}
declare module 'next-cloudinary' {
  interface CldUploadWidgetResults {
    event?: string;
    info: ImageInfotype;
  }
}