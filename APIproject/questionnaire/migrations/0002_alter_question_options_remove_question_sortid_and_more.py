# Generated by Django 4.0.1 on 2022-02-12 15:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('questionnaire', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='question',
            options={'verbose_name': 'Question', 'verbose_name_plural': 'Questions'},
        ),
        migrations.RemoveField(
            model_name='question',
            name='sortid',
        ),
        migrations.RemoveField(
            model_name='question',
            name='type',
        ),
        migrations.AlterField(
            model_name='answer',
            name='answer',
            field=models.TextField(blank=True, verbose_name='Answer'),
        ),
        migrations.AlterField(
            model_name='answer',
            name='question',
            field=models.ForeignKey(help_text='The question that this is an answer to', on_delete=django.db.models.deletion.CASCADE, to='questionnaire.question'),
        ),
        migrations.AlterField(
            model_name='answer',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='Themes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('father', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='questionnaire.themes')),
            ],
        ),
        migrations.AddField(
            model_name='question',
            name='theme',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='questionnaire.themes'),
        ),
    ]