# Generated by Django 4.0.1 on 2022-02-08 17:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Config',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('verification_code_validation_time', models.IntegerField(default=30)),
                ('recover_password_token_validation_time', models.IntegerField(default=1)),
                ('recover_password_url', models.CharField(blank=True, max_length=1024, null=True)),
                ('recover_password_contact_us_url', models.CharField(blank=True, max_length=1024, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
