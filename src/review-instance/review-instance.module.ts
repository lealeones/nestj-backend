import { Module } from '@nestjs/common';
import { ReviewInstanceService } from './review-instance.service';
import { ReviewInstanceResolver } from './review-instance.resolver';

@Module({
  providers: [ReviewInstanceResolver, ReviewInstanceService]
})
export class ReviewInstanceModule {}
