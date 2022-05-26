import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1653524247703 implements MigrationInterface {
  name = 'SchemaSync1653524247703';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" DROP COLUMN "description"`,
      undefined,
    );
  }
}
