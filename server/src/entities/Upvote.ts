// ObjectType (graphql) and Entity(mikro-orm) for a post with id, createdAt, updatedAt, and title
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Post } from './Post';
import { User } from './User';

// many to many
// user <-> posts
// user -> upvote <- posts

@Entity()
export class Upvote extends BaseEntity {
  @Column({ type: 'int' })
  value: number;

  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => User, (user) => user.upvotes)
  user: User;

  @PrimaryColumn()
  postId: number;

  @ManyToOne(() => Post, (post) => post.upvotes, {
    onDelete: 'CASCADE',
  })
  post: Post;
}
