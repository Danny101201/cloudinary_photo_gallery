interface SearchResult {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: string;
  access_mode: string;
  access_control?: any;
  etag: string;
  created_by?: any;
  uploaded_by?: any;
  last_updated: Lastupdated;
  tags?: string[];
}

interface Lastupdated {
  tags_updated_at: string;
  updated_at: string;
  public_id_updated_at: string;
}

type Folder = { name: string, path: string }
type GetRootFolderResponse = {
  folders: Folder[]
};

type ImageEffectType = 'blur' | 'fillBackground' | 'grayscale' | 'pixelate' | 'removeBackground' | undefined