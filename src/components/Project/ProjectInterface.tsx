type TagData = 'JavaScript' | 'TypeScript' | 'Node' | 'Express';
type ExternalLinkLive = string;
type ExternalLinkCode = string;

export interface ProjectDataProps {
  projectImage: HTMLImageElement;
  projectImageAlt: string;
  projectDescription: string;
  tags: TagData[];
  liveURL: ExternalLinkLive;
  codeURL: ExternalLinkCode;
}

export interface TagProps {
  tagText: TagData;
}

export interface LiveLinkProps {
  liveLinkURL: ExternalLinkLive;
}

export interface CodeLinkProps {
  codeLinkURL: ExternalLinkCode;
}