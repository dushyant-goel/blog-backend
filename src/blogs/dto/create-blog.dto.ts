export class CreateBlogDto {
  readonly id: number;
  readonly content: string;
  readonly title: string;
  readonly authorId: number;
}
