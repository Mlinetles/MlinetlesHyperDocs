# 源生成器

MMF开发效率高的一个特点就是采用了大量的源生成器来处理重复代码，而与源生成器交互的主要方法是通过添加MMF提供的一系列特性Attribute，下面介绍MMF中的特性

## MapName

MapName特性用于给类添加Names和ClassRef静态属性，它可以自动将中间名转为混淆名，且同时支持点格式和斜杠格式

如果MapName修饰的是嵌套类，可以只填写$后的部分，源生成器会自动处理

如果MapName修饰的是非混淆类，可以在MapName的第二个参数（可选参数，默认true）处填写false，这样MapName就不会通过映射器获取混淆名

## Signature

Signature特性用于补全方法和属性实现

给partial方法和属性添加Signature时，源生成器会自动解析方法属性的参数列表，返回值等，并生成对应的实现

如果不用partial标注，则表示你只想利用源生成器获取方法的MethodID，这种情况下应该将方法改为private，方法体为throw NotSupportedException();

Signature同样有第二个参数，可以将其改为false阻止使用映射器

public static final字段对应C#中的静态只读属性，由于它是final的，源生成器将会在静态构造函数中缓存它而不是反复获取，所以它的声明为{ get; private set; }，前提是它是一个对象，如果它是基础类型，请使用const并将Signature特性注释掉