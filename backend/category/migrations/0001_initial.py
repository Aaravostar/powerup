# Generated by Django 4.1.4 on 2022-12-20 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product_category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(max_length=50)),
                ('category_desc', models.CharField(blank=True, max_length=50, null=True)),
                ('createdTime', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
